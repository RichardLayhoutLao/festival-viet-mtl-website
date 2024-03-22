import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


  const faq = [
    {
      "question": "What is the [Vietnamese Festival Name]?",
      "answer": "The [Vietnamese Festival Name] is an annual cultural celebration in Vietnam that showcases the rich heritage, traditions, and culinary delights of the country. It is a time for community, joy, and honoring cultural practices."
    },
    {
      "question": "When and where is the festival held?",
      "answer": "The festival typically takes place [specific time, e.g., 'in the first week of April'] at [specific location, e.g., 'the heart of Hanoi']. Specific dates and venues can vary each year, so checking the official festival website or contacting the organizers for up-to-date information is advised."
    },
    {
      "question": "What can attendees expect at the festival?",
      "answer": "Attendees can enjoy traditional music and dance performances, craft workshops, street parades, and food stalls with local delicacies. The festival also features games, contests, and exhibitions that highlight Vietnamese culture and history."
    },
    {
      "question": "Are there any tickets required for the festival?",
      "answer": "The festival may have free and ticketed events. Ticketing information, including prices and how to purchase, can be found on the festival's website or through authorized vendors."
    },
    {
      "question": "What should I bring to the festival?",
      "answer": "Bring essentials like a water bottle, sunscreen, a hat, and comfortable shoes. Depending on activities, you might also want a camera, a small backpack, and cash for purchases."
    },
    {
      "question": "Are there any accommodation recommendations for visitors from out of town?",
      "answer": "The festival's website usually lists recommended accommodations. Booking early is advised as places can fill up during the festival."
    },
    {
      "question": "Is the festival family-friendly?",
      "answer": "Yes, the festival offers activities and entertainment for all ages, making it ideal for families."
    },
    {
      "question": "How can I volunteer or participate in the festival?",
      "answer": "Volunteers and participants are welcome. Information and application forms are available on the festival's website or by contacting the organizers."
    },
    {
      "question": "What measures are in place for safety and accessibility?",
      "answer": "The festival ensures a safe and accessible environment with security, medical stations, and accessibility for those with disabilities. Contact the organizers for specific inquiries or assistance."
    },
    {
      "question": "Where can I find more information and updates about the festival?",
      "answer": "Check the festival's official website and social media channels for the latest news, schedules, and updates."
    },
    {
        "question": "Can I bring my pets to the festival?",
        "answer": "Pet policies vary by festival. It is recommended to check the festival's official website or contact the organizers directly to understand the specific pet regulations."
      },
      {
        "question": "Will there be vegetarian or vegan food options available?",
        "answer": "Many Vietnamese festivals cater to a variety of dietary preferences, including vegetarian and vegan options. However, availability can vary, so it's a good idea to check food stall listings or inquire with the festival organizers beforehand."
      },
      {
        "question": "What are the transportation options to get to the festival?",
        "answer": "The festival location is typically accessible by various modes of transportation, including public transit, taxis, and private vehicles. Detailed transportation options and directions should be available on the festival's website."
      },
      {
        "question": "Is there an official festival app I can download?",
        "answer": "If the festival offers an official app, it would typically feature schedules, maps, vendor lists, and other useful information. Check the festival's website to see if an app is available for download."
      },
      {
        "question": "How can I find lost items during the festival?",
        "answer": "Most festivals have a lost and found area or service. If you lose an item, contact a festival staff member or visit the lost and found location as soon as possible."
      },
      {
        "question": "Are there any language services available for international visitors?",
        "answer": "Larger festivals may offer language assistance or information in multiple languages. Check the festival's website or inquire with the organizers for specific language support services."
      },
      {
        "question": "Can I participate in the festival as a performer or vendor?",
        "answer": "Many festivals welcome performers and vendors who enhance the event's cultural experience. Application processes and deadlines can typically be found on the festival's website."
      },
      {
        "question": "What should I do in case of a medical emergency at the festival?",
        "answer": "Festivals usually have medical staff and facilities on site. If you or someone else needs medical assistance, locate a festival staff member or head to the nearest medical station immediately."
      },
      {
        "question": "Are there any discount offers for groups or early bird tickets?",
        "answer": "Discounts can vary by event. Check the festival's ticketing information for any available group discounts or early bird promotions."
      },
      {
        "question": "How can I stay updated on festival changes or cancellations?",
        "answer": "Stay informed by checking the festival's official website and social media channels regularly, especially as the event date approaches, for any updates or important announcements."
      }
  ]
  
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">


        {faq.map((question)=>(
            <div key={question.answer}>
                <AccordionItem value={question.answer}>
                    <AccordionTrigger>{question.question}</AccordionTrigger>
                    <AccordionContent>
                    {question.answer}
                    </AccordionContent>
                </AccordionItem>
            </div>
        ))}
      </Accordion>
    )
  }
  