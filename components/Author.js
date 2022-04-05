import React from "react"
import Image from "next/image"

function Author({ author }) {
  return (
    <div className="text-center mt-20 mb-8 p-20 relative rounded-lg shadow-lg bg-gray-100">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          alt={author.name}
          height="100px"
          width="100px"
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
      <h3 className="text-black my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-black text-lg">{author.bio}</p>
    </div>
  )
}

export default Author
