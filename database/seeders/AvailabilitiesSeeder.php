<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;

class AvailabilitiesSeeder extends Seeder
{
	public function run(): void
	{
		$faker = Faker::create();

		foreach (range(1, 10) as $index) {
			DB::table('availabilities')->insert([
				'adventure_id' => $faker->numberBetween(1, 10),
				'price_formula_id' => $faker->numberBetween(1, 10),
				'start_at' => $faker->dateTimeBetween('+1 month', '+2 months'),
				'end_at' => $faker->dateTimeBetween('+2 months', '+3 months'),
				'order_id' => null,
				'created_at' => now(),
				'updated_at' => now(),
			]);
		}
	}
}
