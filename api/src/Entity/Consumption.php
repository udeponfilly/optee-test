<?php

namespace App\Entity;

use App\Repository\ConsumptionRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ConsumptionRepository::class)]
class Consumption
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["getConsumption", "getEnergy"])]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups(["getConsumption", "getEnergy"])]
    private ?\DateTimeInterface $date = null;

    #[ORM\ManyToOne(inversedBy: 'consumptions')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(["getConsumption"])]
    private ?energyType $energyType = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["getConsumption", "getEnergy"])]
    private ?float $quantity = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["getConsumption", "getEnergy"])]
    private ?float $cost = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(?\DateTimeInterface $date): static
    {
        $this->date = $date;

        return $this;
    }

    public function getEnergyType(): ?energyType
    {
        return $this->energyType;
    }

    public function setEnergyType(?energyType $energyType): static
    {
        $this->energyType = $energyType;

        return $this;
    }

    public function getQuantity(): ?float
    {
        return $this->quantity;
    }

    public function setQuantity(?float $quantity): static
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getCost(): ?float
    {
        return $this->cost;
    }

    public function setCost(?float $cost): static
    {
        $this->cost = $cost;

        return $this;
    }
}
