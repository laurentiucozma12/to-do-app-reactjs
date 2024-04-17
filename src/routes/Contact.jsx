import { Form } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Contact() {
  const contact = {
    first: 'Laurențiu',
    last: 'Cozma',
    avatar:
      'https://media.licdn.com/dms/image/D4D03AQH4Ff-pee4Log/profile-displayphoto-shrink_800_800/0/1712581208553?e=1718841600&v=beta&t=0oMcQ9Uc1acr8de6eew1MP3Syt0dkBvF1ZqiMIB0hUo',
    linkedin: 'laurentiu-cozma',
    notes: 'Full-Stack Developer Freelancer',
    favorite: true,
  };

  return (
    <div id="contact" className="flex">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || null}
          width={200}
          className="rounded-lg"
        />
      </div>

      <div className="px-4">
        <h1 className="mb-2 inline-flex text-xl">
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}
          <Favorite contact={contact} />
        </h1>

        {contact.linkedin && (
          <p className="mb-2">
            <a
              className="text-blue-500"
              target="_blank"
              href={`https://linkedin.com/in/${contact.linkedin}`}
            >
              Linkedin: {contact.linkedin}
            </a>
          </p>
        )}

        {contact.notes && <p className="mb-2">{contact.notes}</p>}

        <div className="flex ">
          <Form action="edit">
            <button
              type="submit"
              className="me-3 rounded-lg border-2 px-2 py-1 text-blue-500"
            >
              Edit
            </button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm('Please confirm you want to delete this record.')) {
                event.preventDefault();
              }
            }}
          >
            <button
              type="submit"
              className="rounded-lg border-2 px-2 py-1 text-red-500"
            >
              Delete
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        className="text-yellow-400"
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  );
}
