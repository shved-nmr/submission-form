# submission-form
This form contains 3 fields that prompt a city, an area and an email.

All fields require some input, so if it is left empty, the program will ask for an input with a custom error message.

The city field checks from a JSON file if the inputted city is in Finland. If the city doesn't match, the form does not allow submission and asks 
to check the input with a custom error message.

The area field checks if the input is a number and then ensures that the number is within the allowed range.

The email field checks if the input is an email via regex. If "@gmail" is detected in the input, the form will automatically fill out the remaining 
part (.com) for the user.
