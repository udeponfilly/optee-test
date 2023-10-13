<?php

namespace App\Entity;

use App\Repository\EnergyTypeRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EnergyTypeRepository::class)]
class EnergyType
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 10, nullable: true)]
    private ?string $unit = null;

    #[ORM\Column(nullable: true)]
    private ?float $averagePricePerUnit = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getUnit(): ?string
    {
        return $this->unit;
    }

    public function setUnit(?string $unit): static
    {
        $this->unit = $unit;

        return $this;
    }

    public function getAveragePricePerUnit(): ?float
    {
        return $this->averagePricePerUnit;
    }

    public function setAveragePricePerUnit(?float $averagePricePerUnit): static
    {
        $this->averagePricePerUnit = $averagePricePerUnit;

        return $this;
    }
}
