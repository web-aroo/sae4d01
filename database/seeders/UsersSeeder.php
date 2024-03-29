<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;
use Illuminate\Support\Str;

class UsersSeeder extends Seeder
{
	public function run(): void
	{
		$faker = Faker::create();

		foreach (range(1,10) as $index){
			DB::table('users')->insert([
				'name' => $faker->name,
				'email' => $faker->email,
				'image_url' => $faker->imageUrl(256, 256, 'User', true),
				'phone_number' => $faker->phoneNumber,
				'email_verified_at' => now(),
				'password' => Hash::make('password'),
				'remember_token' => Str::random(10),
				'created_at'=> now(),
				'updated_at'=> now(),
				]);
		}
	}
}
