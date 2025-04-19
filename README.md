# Firebase Studio

This is a NextJS starter in Firebase Studio.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Environment Variables:**

    *   Create a `.env` file in the root directory of the project.
    *   Add any necessary environment variables to the `.env` file. For example:

        ```
        GOOGLE_GENAI_API_KEY=your_google_genai_api_key
        ```

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

5.  **Genkit Development (Optional):**

    To start Genkit development:

    ```bash
    npm run genkit:dev
    ```

    Or, to watch for changes:

    ```bash
    npm run genkit:watch
    ```

## Learn More

To get started, take a look at `src/app/page.tsx`.
