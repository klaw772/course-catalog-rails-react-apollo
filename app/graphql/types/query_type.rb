module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :all_courses, [CourseType], null: false
    field :get_course, CourseType, null: false do
      argument :course_id, ID, required: true, as: :id
    end

    def all_courses
      Course.all
    end

    def get_course(id:)
      Course.find(id)
    end
  end
end
