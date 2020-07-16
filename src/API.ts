const shuffle = (array: string[]) => [...array].sort(() => Math.random() - 0.5);

export type Question = {
    question: string;
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    type: string;
  };
export const fetchQuestions = async () => {
    const url = "https://opentdb.com/api.php?amount=10&category=18&type=multiple";
    const data = await (await fetch(url)).json();

    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffle([...question.incorrect_answers, question.correct_answer])
    }))
}