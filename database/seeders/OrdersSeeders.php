<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;

class OrdersSeeders extends Seeder
{
	public function run(): void
	{
		$faker = Faker::create();

		foreach (range(1,10) as $index){
			DB::table('orders')->insert([
				'user_id' => $faker->numberBetween(1, 10),
				'paid' => $faker->boolean,
				'created_at'=> now(),
				'updated_at'=> now(),
				'deleted_at' => null,
			]);
		}
	}
}
