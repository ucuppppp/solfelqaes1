<?php

namespace App\Http\Controllers;

use App\Http\Resources\ResponseResource;
use App\Models\AllowedDomain;
use App\Models\Answer;
use App\Models\Form;
use App\Models\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ResponseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, $slug)
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

        if(!in_array($userDomain, $allowedDomains) || $user->id !== $form->creator_id ){
            return response()->json([
                "message" => "Forbidden access"
            ], 403);
        }


        $response = Response::where('form_id', $form->id)->first();

        return response()->json([
            "message" => "Get repsonses success",
            "responses" => new ResponseResource($response) 
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $slug)
    {

        $validator = Validator::make($request->all(), [
            "answers" => "required|array"
        ]);

        if($validator->fails()){
            return response()->json([
                "message" => "Invalid field",
                "errors" => $validator->errors()
            ], 422);
        }

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


        $currentResponse = Response::where('user_id', $user->id)->get();


        if(!$currentResponse || $currentResponse->count() == 0){
            $response = Response::create([
                "form_id" => $form->id,
                "user_id" => $user->id,
                "date" => date("Y-m-d H:i:s")
            ]);

            foreach($request['answers'] as $answers){
                Answer::create([
                    "response_id" => $response->id,
                    "question_id" => $answers['question_id'],
                    "value" => $answers["value"]
                ]);
            }
            return response()->json([
                "message" => "Submit response success"
            ]);
        }

        if($currentResponse->count() >= 1){
            dd($currentResponse);
            return response()->json([
                "message" => "You can not submit form twice"
            ], 422);
        }


    }

    /**
     * Display the specified resource.
     */
    public function show(Response $response)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Response $response)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Response $response)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Response $response)
    {
        //
    }
}
