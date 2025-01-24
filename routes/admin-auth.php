<?php

use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('admin')->middleware('guest:admin')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('admin.register');

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [LoginController::class, 'create'])
        ->name('admin.login');

    Route::post('login', [LoginController::class, 'store']);

    Route::redirect('/', '/admin/login', 301);
});

Route::prefix('admin')->middleware('auth:admin')->group(function () {
    
  Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');

  Route::redirect('/', '/admin/dashboard', 301);

    Route::post('logout', [LoginController::class, 'destroy'])
        ->name('admin.logout');
});