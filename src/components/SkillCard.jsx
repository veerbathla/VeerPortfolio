function SkillCard({ title, skills, icon: Icon, accent }) {
  return (
    <div className="group relative rounded-3xl p-7 bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300" data-aos="fade-up" data-aos-duration="1000">

      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-5 ${accent}`}>
        <Icon size={24} />
      </div>

      <h2 className="text-xl font-semibold text-gray-900 tracking-tight mb-4">
        {title}
      </h2>

      <div className="flex flex-wrap gap-2.5 " >
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-1.5 rounded-full bg-gray-50 text-gray-600 text-sm font-medium border border-gray-100 group-hover:border-gray-200 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  );
}

export default SkillCard;