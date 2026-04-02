/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

import { EmailService, SmsService, SendNotification } from "./sample";

const emailNotification = new SendNotification(new EmailService());
emailNotification.sendNotification("Hello via Email!");

const smsNotification = new SendNotification(new SmsService());
smsNotification.sendNotification("Hello via SMS!");
