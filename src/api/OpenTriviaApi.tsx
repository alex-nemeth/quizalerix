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
}

export default OpenTriviaApi;
