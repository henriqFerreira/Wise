using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace wise.api.Models;

public class User {
    [Key]
    public int Id { get; set; }
    [Required(ErrorMessage = "O campo {0} é obrigatório.")]
    [StringLength(25, MinimumLength = 5, ErrorMessage = "O campo {0} deve ter entre 1 e 25 caracteres.")]
    public string UserName { get; set; }
    [Required(ErrorMessage = "O campo {0} é obrigatório.")]
    [StringLength(25, MinimumLength = 5, ErrorMessage = "O campo {0} deve ter entre 1 e 25 caracteres.")]
    public string FirstName { get; set; }
    [Required(ErrorMessage = "O campo {0} é obrigatório.")]
    [StringLength(50, MinimumLength = 5, ErrorMessage = "O campo {0} deve ter entre 1 e 50 caracteres.")]
    public string LastName { get; set; }
    [Required(ErrorMessage = "O campo {0} é obrigatório.")]
    [EmailAddress]
    public string Email { get; set; }
    [Required(ErrorMessage = "O campo {0} é obrigatório.")]
    [StringLength(255, MinimumLength = 8, ErrorMessage = "O campo {0} deve ter entre 1 e 255 caracteres.")]
    public string Password { get; set; }
    [ForeignKey("IdAspNetUser")]
    [InverseProperty("User")]
    public AspNetUser IdAspNetUserNavigation { get; set; }
}