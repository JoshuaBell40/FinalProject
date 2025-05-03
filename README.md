# FinalProject - ai-email-assistant
An AI-powered automation tool that reads and responds to emails using GPT. This is the final project for my problem solving with software class
# Team Members
- Joshua Von Bell
  
# AI Email Assistant – Project Proposal

## 1. The Big Idea
My  project is an AI-powered email assistant that reads and responds to emails using GPT. The assistant will take sample emails (stored as text or in CSV format), generate context-aware replies using OpenAI's API, and allow the user to review and save those replies. The goal is to automate common email workflows, such as replying to class updates, meeting requests, or internship communications. 

**Minimum Viable Product (MVP):**
- Read a batch of emails from a `.csv` file
- Generate polite, customized replies using GPT-4
- Output those replies to a folder or terminal

**Stretch Goal:**
- Integrate Gmail API to read/send real emails
- Automatically sort and tag emails by urgency
- Sync responses with a task manager like Google Tasks

## 2. Learning Objectives
- Learn how to make API requests in Python (OpenAI, Gmail)
- Understand how to parse and clean email content
- Practice basic automation and file handling
- Improve prompt engineering and AI integration

## 3. Implementation Plan
We’ll use Python as the primary language. The OpenAI GPT-4 API will be used to generate responses. Emails will be stored in a `.csv` file for testing purposes. We will explore Gmail API integration depending on how much progress we make.

Key libraries:
- `openai` for GPT integration
- `csv` and `pandas` for handling emails
- `smtplib` or Gmail API for email sending (optional)
- `dotenv` to manage API keys securely

## 4. Project Schedule
| Week        | Goal                                      |
|-------------|-------------------------------------------|
| Apr 7-12    | Finalize idea, write proposal, test GPT API |
| Apr 13-19   | Parse sample emails + generate replies     |
| Apr 20-26   | Save replies + format output               |
| Apr 27-May 2| Polish UI, add stretch goal if time        |
| May 3       | Final submission (README + code)           |

## 5. Collaboration Plan
Working solo. Using GitHub to version control all progress. All code, proposal, and documentation will be committed regularly. Tasks will be tracked in a Google Doc
Link to Google Doc: [https://docs.google.com/document/d/1yL4gKJf_1GMrdF_EtorhF4KAVblGDC5PTXWTKI8n9FE/edit?usp=sharing](url)


## 6. Risks and Limitations
- OpenAI API costs (we’ll use small inputs and control token usage)
- Gmail API setup may be time-consuming, so we'll treat it as optional
- Ensuring clean email formatting for GPT input may require trial and error

## 7. Additional Course Content
- More help on using external APIs (especially OpenAI and Gmail)
- Examples of small automation tools in Python
