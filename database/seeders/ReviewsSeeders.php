<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;

class ReviewsSeeders extends Seeder
{
	public function run(): void
	{
		$faker = Faker::create();

		foreach (range(1,10) as $index){
			DB::table('reviews')->insert([
				'user_id' => $faker->numberBetween(1, 10),
				'adventure_id' => $faker->numberBetween(1, 10),
				'stars' => $faker->numberBetween(1, 5),
				'text' => $faker->text,
				'created_at'=> now(),
				'updated_at'=> now(),
			]);
		}
	}
}
