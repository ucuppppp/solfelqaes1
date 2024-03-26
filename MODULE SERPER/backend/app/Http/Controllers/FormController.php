<?php

namespace App\Http\Controllers;

use App\Http\Resources\FormResource;
use App\Models\AllowedDomain;
use App\Models\Form;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = auth()->user();

        $forms = Form::where('creator_id', $user->id)->get();

        return response()->json([
            "message" => "Get all forms success",
            "forms" => $forms
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {
        $user = auth()->user();

        $validator = Validator::make($request->all(), [
            "name" => "required",
            "slug" => "required|unique:forms,slug|regex:/^[a-zA-Z0-9.-]+$/",
            "allowed_domains" => "array"
        ]);

        if($validator->fails()){
            return response()->json([
                "message" => "Invalid field",
                "errors" => $validator->errors()
            ], 422);
        }

        $request['allowed_domains'] = implode('',$request->allowed_domains);


        $request['creator_id'] = $user->id;

        $form = Form::create($request->all());
        $allowedDomain = AllowedDomain::create([
            "form_id" => $form->id,
            "domain" => $request['allowed_domains']
        ]);

        return response()->json([
            "message" => "Create form success",
            "form" => $form
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(Request $request)
    // {
    //     //
    // }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, $slug)
    {
        $user = auth()->user();

        
        if(!$slug){
            return response()->json([
                "message" => "Form not found"
            ], 404);
        }
        
        $form = Form::where('slug', $slug)->first();
        
        if(!$form){
            return response()->json([
                "message" => "Form not found"
            ], 404);
        }

        $userDomain = implode('', array_slice(explode('@', $user->email), 1));
        $allowedDomains = AllowedDomain::where('form_id', $form->id)->pluck('domain')->toArray();

        if(!in_array($userDomain, $allowedDomains)){
            return response()->json([
                "message" => "Forbidden access"
            ], 403);
        }

        return response()->json([
            "message" => "Get form success",
            "form" => new FormResource($form)
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Form $form)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Form $form)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Form $form)
    {
        //
    }
}
