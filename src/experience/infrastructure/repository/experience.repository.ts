import { ExperienceRepositoryInterface } from '../../domain/repository/experience.repository.interface';
import { Observable, of } from 'rxjs';
import { ExperienceInterface } from '../../domain/model/experience';
import { Injectable } from '@angular/core';
import { Job } from '../../domain/model/job';
import { Education } from '../../domain/model/education';

@Injectable()
export class ExperienceRepository implements ExperienceRepositoryInterface {
    public listAllJobs(): Observable<ExperienceInterface[]> {
        return of([
            new Job(
              'Développeur Web Full Stack',
              'Leaders League',
              new Date('2017-06-01'),
              null,
              `
                <p>Maintenance et évolution des différents sites du groupe Leaders League (leadersleague.com et magazine-decideurs.com notamment), ainsi que de son ERP.</p>
                <ul>
                  <li>Développement d'APIs PHP (Symfony) en architecture hexagonale, connectées à ElasticSearch pour la lecture et MySQL pour l'écriture, reliées au reste de la stack technique par des évènements diffusés via SimpleBus et RabbitMQ.</li>
                  <li>Mise en place de gateways PHP (Symfony) et TypeScript (NestJS) en architecture hexagonale chargées de l'agrégation des données, ainsi que de la validation et du transfert des mutations de données, communiquant avec les projets frontaux via GraphQL, et avec les APIs via SimpleBus et RabbitMQ.</li>
                  <li>Maintenance et mise à niveau des APIs legacy (Symfony 2.8) : mise en place d'ElasticSearch, raccordement des APIs legacy à SimpleBus et RabbitMQ.</li>
                  <li>Développement d'applications frontend en VueJS et NuxtJS</li>
                  <li>Ecriture de tests unitaires (PhpUnit, Jest) et fonctionnels (Behat, Jest)</li>
                </ul>
              `,
            ),
            new Job(
              'Ingénieur En Études et Développement',
              'Squad - X2I',
              new Date('2015-12-01'),
              new Date('2017-05-01'),
              `
                <p>En prestation auprès de la société x2i, maintenance et évolutivité du site e-commerce international d'Hermès sous Magento 1 et 2.</p>
                <ul>
                  <li>Mise en page et animation de blocs cms pour navigateurs desktops et mobiles</li>
                  <li>Développement de modules d'administration Magento</li>
                  <li>Maintenance du code existant</li>
                  <li>Réalisation des sanity tests après déploiement</li>
                  <li>Développement de fonctionnalités de la version 2 du site sous Magento 2</li>
                </ul>
              `
            ),
            new Job(
              'Développeur web junior',
              'Afnic',
              new Date('2013-11-01'),
              new Date('2015-07-01'),
              `
                <p>Maintenance et évolutivité des sites gérés par l'Afnic.</p>
                <ul>
                  <li>Mise en place d'une authentification par annuaire LDAP</li>
                  <li>Développement du module Registry Lock permettant le verrouillage d'un nom de domaine au niveau du registre</li>
                  <li>Maintenance du code existant</li>
                  <li>Gestion des déploiements via Capistrano</li>
                  <li>Rédaction des documentations techniques et fonctionnelles</li>
                  <li>Mise en place de tests unitaires</li>
                </ul>
              `
            ),
            new Job(
              'Développeur WinDev junior',
              'Segmatech',
              new Date('2012-12-01'),
              new Date('2013-01-01'),
              `
                <p>Développement d'un logiciel de gestion hôtelière</p>
                <ul>
                  <li>Elaboration de la base de données HyperFileSQL</li>
                  <li>Conception et développement du module de réservation des chambres</li>
                  <li>Conception et développement du module de facturation</li>
                </ul>
              `
            ),
            new Job(
              'Développeur web junior',
              'General Electric Healthcare',
              new Date('2012-06-01'),
              new Date('2012-08-01'),
              `
                <p>Développement et mise en production d'une interface de gestion de tickets support</p>
                <ul>
                  <li>Développement des outils de gestion et de suivi des contrats (Alertes lorsqu'un contrat arrive à terme, mise à jour et ajout de nouveaux contrats)</li>
                  <li>Développement de l'interface des tickets. (création et gestion des tickets support)</li>
                  <li>Développement d'une interface d'authentification</li>
                  <li>Hébergement de l'application sur un serveur Windows interne</li>
                </ul>
              `
            ),
        ]);
    }

    public listAllEducations(): Observable<ExperienceInterface[]> {
        return of([
            new Education(
              'Master 1',
              'IPSSI',
              new Date('2015-07-01'),
              null,
              ''
            ),
            new Education(
              'BTS SIO',
              'Ascencia',
              new Date('2013-07-01'),
              null,
              ''
            ),
            new Education(
              'Bac STG',
              'Lycée Descartes',
              new Date('2007-07-01'),
              null,
              ''
            ),
        ]);
    }
}
