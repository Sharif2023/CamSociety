<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;
use Inertia\Inertia;

// Public routes
Route::get('/', [HomeController::class, 'index'])->name('landing'); // Landing page
Route::get('/login', [HomeController::class, 'login'])->name('login');
Route::get('/signup', [HomeController::class, 'signup'])->name('signup');


// Admin routes
Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
    Route::get('/admin', [HomeController::class, 'admin'])->name('admin.dashboard');
    Route::redirect('/dashboard', '/admin'); // Redirect dashboard to admin

    Route::get('/admin/users', [AdminController::class, 'users'])->name('admin.users');
});

// User routes
Route::middleware(['auth', 'verified', 'role:user'])->group(function () {
    Route::get('/dashboard', [HomeController::class, 'dashboard'])->name('dashboard');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/photomarket', [HomeController::class, 'photomarket'])->name('photomarket');
    Route::get('/hirephotographer', [HomeController::class, 'hirephotographer'])->name('hirephotographer');
    Route::get('/eventbook', [HomeController::class, 'eventbook'])->name('eventbook');
    Route::get('/blogsntips', [HomeController::class, 'blogsntips'])->name('blogsntips');
    
});

//event upload
Route::post('/events', [EventController::class, 'store']);

require __DIR__ . '/auth.php';
