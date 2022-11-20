# Lab 8 - Starter
Michael Tedjo <br>
1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
   1. Within a Github action that runs whenever code is pushed 
   2. Manually run them locally before pushing code
   3. Run them all after all development is completed

I would choose within a Github action since making sure that the code meets all criteria when being pushed to a branch allows us to see if it has diminished or broken in functionality.

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)

No, I would use a unit test for a function rather than an end to end test since its quicker and tests the function directly.

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No I would not use a unit test to test the "message" feature: unit testing would be for the write function and the send function. When those two are functional, then the interaction between the two would work as well. (Remember Single Responbility Principle: Each function to achieve one thing.)

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes a unit test is applicable here. The feature is comprised of only one function; to say if a message is too long or not.