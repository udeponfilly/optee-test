<?php

namespace App\DataFixtures;

use App\Entity\EnergyType;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class EnergyTypeFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $energyType = new EnergyType();
        $energyType->setName('Électricité');
        $energyType->setUnit('kWh');
        $energyType->setAveragePricePerUnit(0.15);

        $manager->persist($energyType);
        $manager->flush();
    }
}
