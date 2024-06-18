import React from 'react'

function page() {
  return (
    <div className="max-w-lg mx-auto my-10 p-8 bg-white shadow-md rounded-lg">
    <form className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Get in touch</h2>
        <p className="text-gray-500">Fill in the form below to send me an email.</p>
    <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input type="text" id="name" name="name" required className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"/>
        </div>
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input type="email" id="email" name="email" required className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"/>
        </div>
        <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
            <textarea id="message" name="message" required className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm" rows={4}></textarea>
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Send</button>
    </form>
    <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
        <ul className="mt-4 space-y-2">
            <li><span className="font-medium">Email:</span> nandwanimayank16d@gmail.com</li>
            <li><span className="font-medium">Phone:</span> +91 7878910554</li>
            <li><span className="font-medium">Address:</span> 45'46 house jalaram palace, opp DK Park, Bhatar road, Surat, Gujarat, India</li>
        </ul>
    </div>
</div>
  )
}

export default page