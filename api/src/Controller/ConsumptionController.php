<?php

namespace App\Controller;

use App\Entity\Consumption;
use App\Repository\ConsumptionRepository;
use App\Repository\EnergyTypeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ConsumptionController extends AbstractController
{
    #[Route('/consumptions', name: 'app_consumption', methods: ['GET'])]
    public function getAllConsumptions(ConsumptionRepository $consumptionRepository, SerializerInterface $serializer): JsonResponse
    {
        $consumptionList = $consumptionRepository->findAll();

        $jsonConsumptionList = $serializer->serialize($consumptionList, 'json', ['groups' => 'getConsumption']);
        return new JsonResponse($jsonConsumptionList, Response::HTTP_OK, [], true);
    }

    #[Route('/consumptions/{id}', name: 'detailConsumption', methods: ['GET'])]
    public function getDetailConsumption(Consumption $consumption, SerializerInterface $serializer): JsonResponse
    {
        $jsonConsumption = $serializer->serialize($consumption, 'json', ['groups' => 'getConsumption']);
        return new JsonResponse($jsonConsumption, Response::HTTP_OK, ['accept' => 'json'], true);
    }

    #[Route('/consumptions', name: 'createConsumption', methods: ['POST'])]
    public function createConsumption(Request $request, SerializerInterface $serializer, EntityManagerInterface $em,
                                    UrlGeneratorInterface $urlGenerator, EnergyTypeRepository $energyTypeRepository, ValidatorInterface $validator): JsonResponse
    {
        $consumption = $serializer->deserialize($request->getContent(), Consumption::class, 'json');

        // Récupérez l'ID du type d'énergie à partir du contenu de la requête
        $content = $request->toArray();
        $idEnergyType = $content['energyType'] ?? null;

        // Trouvez l'entité EnergyType correspondante
        $energyType = $energyTypeRepository->find($idEnergyType);

        if (!$energyType) {
            return new JsonResponse(['error' => 'EnergyType not found'], JsonResponse::HTTP_BAD_REQUEST);
        }

        // Associez l'entité EnergyType à l'entité Consumption
        $consumption->setEnergyType($energyType);

        // Validez l'entité Consumption
        $errors = $validator->validate($consumption);

        if ($errors->count() > 0) {
            return new JsonResponse($serializer->serialize($errors, 'json'), JsonResponse::HTTP_BAD_REQUEST, [], true);
        }

        // Persistez et enregistrez l'entité Consumption
        $em->persist($consumption);
        $em->flush();

        $jsonConsumption = $serializer->serialize($consumption, 'json', ['groups' => 'getConsumption']);

        $location = $urlGenerator->generate('detailConsumption', ['id' => $consumption->getId()], UrlGeneratorInterface::ABSOLUTE_URL);

        return new JsonResponse($jsonConsumption, Response::HTTP_CREATED, ["Location" => $location], true);
    }
}
