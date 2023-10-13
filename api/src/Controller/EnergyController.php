<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class EnergyController extends AbstractController
{
    #[Route('/energy', name: 'app_energy', methods:['GET'])]
    public function index(): JsonResponse
    {
        return $this->json([
            'message' => 'Welcome to your new controller!!!!!',
            'path' => 'src/Controller/EnergyController.php',
        ]);
    }
}
