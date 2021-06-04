import Html exposing (..)
import Html.Attributes exposing ( class, id )


type alias User = 
  { firstName: String
  , lastName: String
  }

users = 
  [ { firstName = "John", lastName = "Smith" }
  , { firstName = "Jane", lastName = "Johnson" }
  ]

userItem user =
  li [] 
    [ span [ class "firstName" ] [ text user.firstName ]
    , br [] []
    , span [ class "lastName" ] [ text user.lastName ]
    ]

main =
  div [ id "my-component" ]
    [ ul [] (List.map userItem users) ]