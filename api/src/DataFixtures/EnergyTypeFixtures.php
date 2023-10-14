<?php

namespace App\DataFixtures;

use App\Entity\EnergyType;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class EnergyTypeFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $energyTypes = [
            ['name' => 'Électricité', 'unit' => 'kWh', 'averagePricePerUnit' => 0.15],
            ['name' => 'Gaz', 'unit' => 'm³', 'averagePricePerUnit' => 0.07],
            ['name' => 'Eau', 'unit' => 'L', 'averagePricePerUnit' => 0.002],
        ];

        foreach ($energyTypes as $type) {
            $energyType = new EnergyType();
            $energyType->setName($type['name']);
            $energyType->setUnit($type['unit']);
            $energyType->setAveragePricePerUnit($type['averagePricePerUnit']);
            $manager->persist($energyType);
        }

        $manager->flush();
    }
}
