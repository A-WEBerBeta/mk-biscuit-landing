"use server";

export async function submitContactForm(formData: FormData): Promise<void> {
  const firstname = formData.get("firstname");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  console.log({
    firstname,
    email,
    subject,
    message,
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));
}
