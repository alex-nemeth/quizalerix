class OpenTriviaApi {
  baseUrl: string;
  categoriesAction: string;
  questionsAction: string;

  categoriesUrl: string;
  questionsUrl: string;

  constructor() {
    this.baseUrl = "https://opentdb.com";
    this.categoriesAction = "api_category.php";
    this.questionsAction = "api.php";

    this.categoriesUrl = `${this.baseUrl}/${this.categoriesAction}`;
    this.questionsUrl = `${this.baseUrl}/${this.questionsAction}/`;
  }

  public getQuestionsUrl(questionsParameters: any): string {
    return (
      `${this.questionsUrl}` +
      `?${this.addNumOfQuestionsParameter(
        questionsParameters.numOfQuestions
      )}` +
      `${
        questionsParameters.category === -1
          ? ""
          : this.addCategoryParameter(questionsParameters.category)
      }` +
      ``
    );
  }

  private addNumOfQuestionsParameter(amount: number): string {
    return `amount=${amount}`;
  }

  private addCategoryParameter(category: number): string {
    return `&category=${category}`;
  }
}

export default OpenTriviaApi;
