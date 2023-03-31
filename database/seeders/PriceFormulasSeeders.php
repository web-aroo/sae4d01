<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;

class PriceFormulasSeeders extends Seeder
{
	public function run(): void
	{
		$faker = Faker::create();

		foreach (range(1,10) as $index){
			DB::table('price_formulas')->insert([
				'name' => $faker->name,
				'price' => $faker->numberBetween(200, 300),
				'player_count' => $faker->numberBetween(1, 10),
				'created_at'=> now(),
				'updated_at'=> now(),
			]);
		}
	}
}
