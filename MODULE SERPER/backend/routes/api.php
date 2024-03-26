<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\ResponseController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::prefix('v1')->group(function () {

    Route::post('/auth/login', [AuthController::class, 'login']);

    Route::middleware(['auth:sanctum'])->group(function () {
        Route::post('/auth/logout', [AuthController::class, 'logout']);
        
        Route::prefix('/forms')->group(function() {
            // Forms
            Route::post('/', [FormController::class, 'store']);
            Route::get('/', [FormController::class, 'index']);
            Route::get('/{slug}', [FormController::class, 'show']);
            
            // Questions
            
            Route::post('/{slug}/questions', [QuestionController::class, 'store']);
            Route::delete('/{slug}/questions/{id}', [QuestionController::class, 'destroy']);
            
            
            // Responses
            Route::post('/{slug}/responses', [ResponseController::class, 'store']);
            Route::get('/{slug}/responses', [ResponseController::class, 'index']);
        });
    
            });
        });
