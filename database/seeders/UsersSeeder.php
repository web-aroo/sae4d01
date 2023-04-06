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

		$array = ['billy', 'amine'];

		foreach (range(1,10) as $index){
			DB::table('users')->insert([
				'name' => Arr::shuffle($array)[0],
				'email' => $faker->email,
				'email_verified_at' => now(),
				'password' => Hash::make('password'),
				'remember_token' => Str::random(10),
				'created_at'=> now(),
				'updated_at'=> now(),
				'address' => $faker->address,
				]);
		}
	}
}
