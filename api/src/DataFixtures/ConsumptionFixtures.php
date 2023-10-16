<?php

namespace App\DataFixtures;

use App\Entity\Consumption;
use App\Entity\EnergyType;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class ConsumptionFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        // $energyTypes = $manager->getRepository(EnergyType::class)->findAll();

        // foreach ($energyTypes as $energyType) {
        //     for ($i = 0; $i < 20; $i++) {
        //         $consumption = new Consumption();
        //         $consumption->setEnergyType($energyType);
        //         $consumption->setDate(new \DateTime());
        //         $consumption->setQuantity(rand(1, 1000));
        //         $consumption->setCost($consumption->getQuantity() * $energyType->getAveragePricePerUnit());
        //         $manager->persist($consumption);
        //     }
        // }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            EnergyTypeFixtures::class,
        ];
    }
}
