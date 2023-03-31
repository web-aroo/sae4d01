{{-- This file is used to store sidebar items, inside the Backpack admin panel --}}
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('dashboard') }}"><i class="la la-home nav-icon"></i> {{ trans('backpack::base.dashboard') }}</a></li>
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('user') }}"><i class="nav-icon la la-user"></i> Users</a></li>
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('adventure') }}"><i class="nav-icon la la-gamepad"></i> Adventures</a></li>
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('availability') }}"><i class="nav-icon la la-calendar"></i> Availabilities</a></li>
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('order') }}"><i class="nav-icon la la-shopping-cart"></i> Orders</a></li>
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('price-formula') }}"><i class="nav-icon la la-money"></i> Price formulas</a></li>
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('review') }}"><i class="nav-icon la la-star"></i> Reviews</a></li>
