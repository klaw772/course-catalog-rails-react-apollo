module Types
    class CourseType < Types::BaseObject
        field :id, ID, null: false
        field :name, String, null: false
        field :catalog_number, String, null: false
        field :description, String, null: false
        field :professor, Types::ProfessorType, null: false
        field :reviews, [Types::ReviewType], null: false
        field :average_rating, Float, null: false
        field :created_at, GraphQL::Types::ISO8601DateTime, null: false
        field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    end
end