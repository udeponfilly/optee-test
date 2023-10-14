<?php

namespace App\Entity;

use App\Repository\EnergyTypeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: EnergyTypeRepository::class)]
class EnergyType
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["getEnergy", "getConsumption"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["getEnergy", "getConsumption"])]
    private ?string $name = null;

    #[ORM\Column(length: 10, nullable: true)]
    #[Groups(["getEnergy", "getConsumption"])]
    private ?string $unit = null;

    #[ORM\Column(nullable: true)]
    #[Groups(["getEnergy", "getConsumption"])]
    private ?float $averagePricePerUnit = null;

    #[ORM\OneToMany(mappedBy: 'energyType', targetEntity: Consumption::class, orphanRemoval: true)]
    private Collection $consumptions;

    public function __construct()
    {
        $this->consumptions = new ArrayCollection();
    }

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

    /**
     * @return Collection<int, Consumption>
     */
    public function getConsumptions(): Collection
    {
        return $this->consumptions;
    }

    public function addConsumption(Consumption $consumption): static
    {
        if (!$this->consumptions->contains($consumption)) {
            $this->consumptions->add($consumption);
            $consumption->setEnergyType($this);
        }

        return $this;
    }

    public function removeConsumption(Consumption $consumption): static
    {
        if ($this->consumptions->removeElement($consumption)) {
            // set the owning side to null (unless already changed)
            if ($consumption->getEnergyType() === $this) {
                $consumption->setEnergyType(null);
            }
        }

        return $this;
    }
}
