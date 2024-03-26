<?php

namespace App\Http\Resources;

use App\Models\Answer;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ResponseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $answers = Answer::where('response_id', $this->id)->get()->toArray();

        $data = [];
        foreach($answers as $key => $value){
            $question = Question::where('id', $value['id'])->first();
            $data[$question->name] = $value["value"];
        }



        return[
            "date" => $this->date,
            "user" => $this->user,
            "answers" => $data
        ];
    }
}
