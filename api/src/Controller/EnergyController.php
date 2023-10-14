<?php

namespace App\Controller;

use App\Repository\EnergyTypeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class EnergyController extends AbstractController
{
    #[Route('/energy', name: 'app_energy', methods:['GET'])]
    public function getEnergy(EnergyTypeRepository $energyTypeRepository, SerializerInterface $serializer): JsonResponse
    {
        $energyTypes = $energyTypeRepository->findAll();
        $jsonEnergyTypes = $serializer->serialize($energyTypes, 'json', ['groups' => 'getEnergy']);
        return new JsonResponse($jsonEnergyTypes, Response::HTTP_OK, [], true);
    }
}
