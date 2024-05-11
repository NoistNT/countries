import { Country } from '@/schemas/country.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { readFileSync } from 'node:fs';

@Injectable()
export class SeederService {
  constructor(
    @InjectModel(Country.name) private readonly countryModel: Model<Country>,
  ) {}

  async seed(): Promise<{
    status: number;
    message: string;
    data: Country[] | null;
  }> {
    const rawData = readFileSync(process.env.COUNTRIES_JSON_PATH!);
    const countries: Country[] = JSON.parse(rawData.toString());

    try {
      await this.countryModel.deleteMany({});
      await this.countryModel.insertMany(countries);
      return {
        status: 201,
        message: 'Countries seeded successfully.',
        data: countries,
      };
    } catch (error) {
      const typedError = error as Error;
      console.error(typedError.message);
      return {
        status: 500,
        message: 'Error seeding countries.',
        data: null,
      };
    }
  }
}
