package hackathon.covid19.domains.enums;

public enum UsuarioNivel {

    ADMIN (1, "ROLE_ADMIN"),
	PROFISSIONAL (2, "ROLE_PROFISSIONAL"),
    CLIENTE (3, "ROLE_CLIENTE");
    
	private int cod;
	private String descricao;
	
	private UsuarioNivel( int cod, String descricao ) {
		this.cod = cod;
		this.descricao = descricao;
	}
	
	public int getCod() {
		return this.cod;
	}
	
	public String getDescricao() {
		return this.descricao;
	}
	
	public static UsuarioNivel toEnum( Integer cod ) {
		
		if( cod == null ) {
			return null;
		}
		
		
		for( UsuarioNivel x : UsuarioNivel.values() ) {
			if( cod.equals( x.getCod() ) ) {
				return x;
			}
		}
		
		throw new IllegalArgumentException( "Id inválido: " + cod );
		
		
	}
}