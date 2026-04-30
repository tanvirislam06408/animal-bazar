import { ChevronDown } from "@gravity-ui/icons";
import { Accordion } from "@heroui/react";

export function Faq() {
  const faqs = [
    {
      title: "How do I book an animal for Qurbani?",
      content:
        "Browse available animals, check details like price and weight, and click on the booking button. Fill out the form and confirm your booking.",
    },
    {
      title: "Do I need an account to place a booking?",
      content:
        "Yes, you must be logged in to book an animal. This helps us manage your booking securely.",
    },
    {
      title: "Are the animals suitable for Qurbani?",
      content:
        "Yes, all animals listed on our platform are verified and meet the requirements for Qurbani.",
    },
    {
      title: "Can I choose a specific animal?",
      content:
        "Yes, you can view each animal’s details and select the one that fits your preference before booking.",
    }
  ];

  return (
    <div className="w-full container mx-auto flex flex-col gap-6 px-5 md:px-52">
      

      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <p className="mb-4 text-lg font-medium text-muted text-center">
          Everything you need to know about booking and animals.
        </p>
      </div>

    
      <Accordion className="w-full shadow" variant="surface">
        {faqs.map((item, index) => (
          <Accordion.Item key={index}>
            <Accordion.Heading>
              <Accordion.Trigger>
                {item.title}
                <Accordion.Indicator>
                  <ChevronDown />
                </Accordion.Indicator>
              </Accordion.Trigger>
            </Accordion.Heading>

            <Accordion.Panel>
              <Accordion.Body>{item.content}</Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
