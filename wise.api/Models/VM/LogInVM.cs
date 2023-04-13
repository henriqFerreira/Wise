using System.ComponentModel.DataAnnotations;

namespace wise.api.Models.VM;

public class LogInVM {
    [Required(ErrorMessage = "O campo {0} é obrigatório.")]
    [EmailAddress]
    public string Email { get; set; }
    [Required(ErrorMessage = "O campo {0} é obrigatório.")]
    [StringLength(255, MinimumLength = 8, ErrorMessage = "O campo {0} deve ter entre 1 e 255 caracteres.")]
    public string Password { get; set; }
}