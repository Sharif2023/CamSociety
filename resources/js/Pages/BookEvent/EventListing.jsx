import React from 'react';
import { Head } from '@inertiajs/react';

const EventListing = ({ events }) => {
    return (
        <>
            <Head title="Event Listing - CamSociety" />
            <main className="max-w-4xl mx-auto p-6 mt-6 border border-b-gray-200 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">Event Listings</h1>
                <div className="space-y-4">
                    {events.length > 0 ? (
                        events.map((event) => (
                            <div key={event.id} className="border p-4 rounded-lg">
                                <h2 className="text-xl font-semibold">{event.event_name}</h2>
                                <p>{event.location}</p>
                                <p>{event.start_date} - {event.end_date}</p>
                                <p>Rate: {event.rate} BDT/hour</p>
                                <img src={`/storage/${event.photo_url}`} alt={event.event_name} className="w-full h-60 object-cover rounded-lg" />
                            </div>
                        ))
                    ) : (
                        <p>No events available.</p>
                    )}
                </div>
            </main>
        </>
    );
};

export default EventListing;
