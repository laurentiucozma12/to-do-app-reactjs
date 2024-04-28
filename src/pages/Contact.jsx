export default function Contact() {
  const contact = {
    first: 'Laurențiu',
    last: 'Cozma',
    avatar:
      'https://media.licdn.com/dms/image/D4D03AQH4Ff-pee4Log/profile-displayphoto-shrink_800_800/0/1712581208553?e=1718841600&v=beta&t=0oMcQ9Uc1acr8de6eew1MP3Syt0dkBvF1ZqiMIB0hUo',
    platforms: [
      {
        name: 'Linkedin',
        link: 'https://linkedin.com/in/laurentiu-cozma',
      },
      { name: 'GitHub', link: 'https://github.com/laurentiucozma12' },
    ],
    notes: 'I am a Full-Stack Developer Freelancer',
  };

  return (
    <div className="flex justify-center">
      <div>
        <a href={contact.platforms[0].link} target="_blank">
          <img
            key={contact.avatar}
            src={contact.avatar || null}
            width={200}
            className="rounded-lg"
          />
        </a>
      </div>
      <div className="flex flex-col px-4">
        <h1 className="mb-2 inline-flex text-2xl font-bold">
          Hello, my name is {contact.first} {contact.last}
        </h1>

        <p className="mb-2 text-xl">{contact.notes}</p>

        {contact.platforms.map((platform) => (
          <p className="mb-2 text-xl" key={platform.name}>
            <a
              className=" text-blue-900 duration-700 hover:text-blue-700
                      dark:text-blue-400 hover:dark:text-blue-300"
              target="_blank"
              href={platform.link}
            >
              {platform.name}: {platform.link}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}
