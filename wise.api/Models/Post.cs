using System.ComponentModel.DataAnnotations;

namespace wise.api.Models;

public class Post {
    [Key]
    public int Id { get; set; }
    [Required]
    public int IdUser { get; set; }
    [Required(ErrorMessage = "O campo {0} é obrigatório.")]
    [StringLength(255, MinimumLength = 1, ErrorMessage = "O campo {0} deve ter entre 1 e 255 caracteres.")]
    public string Content { get; set; }
}