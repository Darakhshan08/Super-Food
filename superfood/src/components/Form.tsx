import React from 'react'

function Form() {
  return (
    <>
         <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Fast Support Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Etiam convallis, felis quis dapibus dictum, libero mauris luctus nunc,
            non fringilla purus ligula non justo. Non fringilla purus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Barcelona
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <div>
                    <p>198 West 21th Street, Suite 721</p>
                    <p>Barselona 20020</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p>superfood@example.com</p>
                </div>
                <div className="flex items-center">
                  <p>+88(0) 101 0000 000</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                New York
              </h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <div>
                    <p>198 West 21th Street, Suite 721</p>
                    <p>Barselona 20020</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p>superfood@example.com</p>
                </div>
                <div className="flex items-center">
                  <p>+88(0) 101 0000 000</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            <div>
              <textarea
                name="comment"
                placeholder="Comment"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-teal-600 transition duration-200"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    
    </>
  )
}

export default Form