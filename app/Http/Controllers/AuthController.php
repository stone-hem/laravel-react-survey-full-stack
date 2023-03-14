<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function Register(RegisterRequest $request)
    {
        $data=$request->validated();
        $user=User::create([
            'name'=>$data['name'],
            'email'=>$data['email'],
            'password'=>Hash::make($data['password']),
        ]);
        $token=$user->createToken('vite')->plainTextToken;
        return response([
            'user'=>$user,
            'token'=>$token
        ]);
    }
    public function login(LoginRequest $request)
    {
        $credentials=$request->validated();
        $rememberMe=$credentials['remember']??false;
        unset($credentials['remember']);
        if (!Auth::attempt($credentials,$rememberMe)) {
            return response([
                'error'=>'Credentials do not match'
            ],422);
        }
        $user=User::where('email',$credentials['email'])->first();
        $token=$user->createToken('vite')->plainTextToken;
        return response([
            'user'=>$user,
            'token'=>$token
        ]);

    }

    public function logout(Request $request)
    {
        $user=Auth::user();
        $user->currentAccessToken()->delete();
        return response([
            'success'=>true
        ]);
    }
}
