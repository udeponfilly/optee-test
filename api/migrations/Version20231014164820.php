<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231014164820 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE consumption (id INT AUTO_INCREMENT NOT NULL, energy_type_id INT NOT NULL, date DATE NOT NULL, quantity DOUBLE PRECISION NOT NULL, cost DOUBLE PRECISION NOT NULL, INDEX IDX_2CFF2DF980726647 (energy_type_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE energy_type (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, unit VARCHAR(10) DEFAULT NULL, average_price_per_unit DOUBLE PRECISION DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE consumption ADD CONSTRAINT FK_2CFF2DF980726647 FOREIGN KEY (energy_type_id) REFERENCES energy_type (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE consumption DROP FOREIGN KEY FK_2CFF2DF980726647');
        $this->addSql('DROP TABLE consumption');
        $this->addSql('DROP TABLE energy_type');
    }
}
