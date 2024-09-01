import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('produits')
export class ProduitsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  auteur: string;

  @Column()
  genre: string;

  @Column()
  date_publication: Date;

  @Column()
  langue: string;

  @Column()
  description: string;

  @Column()
  disponibilite: boolean;
}
