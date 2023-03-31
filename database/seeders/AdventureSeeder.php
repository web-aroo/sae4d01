<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;

class AdventureSeeder extends Seeder
{
	public function run(): void
	{
		$faker = Faker::create();

		foreach (range(1,10) as $index){
			DB::table('adventures')->insert([
				'name' => $faker->name,
				'image_url' => $faker->imageUrl(640, 480, 'Escape game', true),
				'description' => $faker->text,
				'difficulty' => $faker->numberBetween(1, 5),
				'latitude' => $faker->latitude,
				'longitude' => $faker->longitude,
				'min_player_count' => $faker->numberBetween(1, 5),
				'max_player_count' => $faker->numberBetween(6, 10),
				'duration' => $faker->numberBetween(60, 120),
				'created_at'=> now(),
				'updated_at'=> now(),
			]);
		}
	}
}
