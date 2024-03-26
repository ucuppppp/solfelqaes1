<?php

namespace App\Http\Controllers;

use App\Models\AllowedDomain;
use App\Models\Form;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(Request $request,$slug)
    {
        
        $validator = Validator::make($request->all(), [
            "name" => "required",
            "choice_type" => "required|in:short answers,paragraph,date,multiple choice,dropdown,checkboxes",
            "choices" => ["required_if:choice_type,multiple choice,dropdown,checkboxes", function($att, $val, $fail){
                if(!is_array($val)){
                    $fail("The $att must be an array.");
                    $fail("The $att must be a string.");
                }
                if(is_array($val) && in_array(false, array_map('is_string', $val))){
                    $fail("The $att must be an array of string.");
                }
            }]
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

        if(!in_array($userDomain, $allowedDomains) || $user->id !== $form->creator_id ){
            return response()->json([
                "message" => "Forbidden access"
            ], 403);
        }

        $request['choices'] = implode('',$request->choices);
        $request['form_id'] = $form->id;
        $question = Question::create($request->all());

        return response()->json([
            "message" => "Add question success",
            "question" => $question
        ]);


    }

    /**
     * Display the specified resource.
     */
    public function show(Question $question)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Question $question)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Question $question)
    {
        //
    }

/**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $slug, $id)
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
        
        $question = Question::where("form_id", $form->id)->where('id', $id)->first();


        if(!$question){
            return response()->json([
                "message" => "Question not Found"
            ], 404);
        }

        $question->delete();

        return response()->json([
            "message" => "Remove question success"
        ]);

    }
}
