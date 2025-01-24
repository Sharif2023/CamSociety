<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BlogNTip;
use Illuminate\Support\Facades\Auth;

class BlogNTipController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|max:2048',
        ]);

        $imagePath = $request->file('image') 
            ? $request->file('image')->store('blog_images', 'public') 
            : null;

        BlogNTip::create([
            'title' => $request->title,
            'content' => $request->content,
            'image' => $imagePath,
            'user_id' => Auth::id(),
        ]);

        return response()->json(['message' => 'Post created successfully'], 201);
    }
}
